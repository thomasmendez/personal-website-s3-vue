resource "aws_route53_zone" "test" {
  name = "dev.${var.aws_bucket_name}.com"
  tags = {
    Environment = "dev"
  }
}

resource "aws_route53_record" "test-ns" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "dev.${var.aws_bucket_name}.com"
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.test.name_servers
}