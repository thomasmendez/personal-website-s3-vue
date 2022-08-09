resource "aws_route53_zone" "main" {
  name = "thomasamendez.com"
}

resource "aws_route53_record" "cert_validation" {
  zone_id = aws_route53_zone.main.zone_id
  name = "thomasamendez.com"
  type = "A"

  alias {
    name = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}