resource "aws_route53_zone" "main" {
  name    = "thomasamendez.com"
  zone_id = "Z03836913RO0VDLQJ03DI"
}
resource "aws_route53_zone" "test" {
  name    = "dev.thomasamendez.com"
  zone_id = "Z03836913RO0VDLQJ03DI"
  tags = {
    Environment = "dev"
  }
}

resource "aws_route53_record" "test-ns" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "dev.thomasamendez.com"
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.test.name_servers
}