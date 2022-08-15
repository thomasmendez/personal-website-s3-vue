provider "aws" {
  alias  = "virginia"
  region = "us-east-1"
}
# Find a certificate issued by (not imported into) ACM
data "aws_acm_certificate" "amazon_cert" {
  domain      = var.domain
  types       = ["AMAZON_ISSUED"]
  statuses    = ["ISSUED"]
  most_recent = true
  provider    = aws.virginia
}

data "aws_route53_zone" "zone" {
  name         = var.domain
  private_zone = false
}

# resource "aws_route53_record" "cert_validation" {
#   name    = data.aws_acm_certificate.amazon_cert.domain_validation_options.name
#   type    = data.aws_acm_certificate.amazon_cert.domain_validation_options.type
#   zone_id = data.aws_route53_zone.zone.id
#   records = ["${data.aws_acm_certificate.amazon_cert.domain_validation_options.record}"]
#   ttl     = 60
# }

# resource "aws_acm_certificate_validation" "cert" {
#   certificate_arn         = data.aws_acm_certificate.amazon_cert.arn
#   validation_record_fqdns = ["${aws_route53_record.cert_validation.fqdn}"]
# }