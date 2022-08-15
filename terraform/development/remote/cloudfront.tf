locals {
  s3_origin_id = aws_s3_bucket.bucketdev.id
}
resource "aws_cloudfront_origin_access_identity" "bucketdev" {
  comment = "bucketdev"
}
data "aws_cloudfront_cache_policy" "cache_policy" {
  name = "Managed-CachingOptimized"
}
resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.bucketdev.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.bucketdev.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Managed by Terraform"
  default_root_object = "index.html"

  aliases = ["${var.aws_bucket_name}.${var.domain}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = data.aws_cloudfront_cache_policy.cache_policy.id
  }

  custom_error_response {
    error_caching_min_ttl = 10
    error_code            = 404
    response_code         = 404
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US"]
    }
  }

  tags = {
    Environment = "development"
  }

  # viewer_certificate {
  #   acm_certificate_arn      = aws_acm_certificate_validation.cert.certificate_arn
  #   ssl_support_method       = "sni-only"
  #   minimum_protocol_version = "TLSv1.2_2018"
  # }

  # viewer_certificate {
  #   cloudfront_default_certificate = true
  # }

  viewer_certificate {
    acm_certificate_arn = data.aws_acm_certificate.amazon_cert.arn
    ssl_support_method  = "TLSv1.2_2021"
  }

}

# resource "aws_acm_certificate" "cert" {
#   provider = aws.virginia

#   domain_name       = "thomasamendez.com"
#   validation_method = "DNS"

#   tags = {
#     Name        = "dev"
#     Environment = var.env
#   }

#   lifecycle {
#     create_before_destroy = true
#   }
# }
# resource "aws_acm_certificate_validation" "cert" {
#   provider                = aws.virginia
#   certificate_arn         = aws_acm_certificate.cert.arn
#   validation_record_fqdns = [aws_route53_record.cert_validation.fqdn]
# }
