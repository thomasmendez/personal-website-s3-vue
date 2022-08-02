resource "aws_route53_zone" "test" {
  name = "thomasamendez.com"
}

resource "aws_route53_zone" "dev-zone" {
  name = "dev.thomasamendez.com"
  tags = {
    Environment = "dev"
  }
}

resource "aws_route53_record" "dev-ns" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "dev.thomasamendez.com"
  type    = "NS"
  ttl     = "30"
  records = aws_route53_zone.dev.name_servers
}

resource "aws_route53_record" "route53dev" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.aws_bucket_name
  type    = "A"
  ttl     = 300
  records = [aws_eip.lb.public_ip]
  tags = {
    Environment = "dev"
  }
}