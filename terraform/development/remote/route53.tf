# resource "aws_route53_zone" "main" {
#   name = "thomasamendez.com"
# }
# resource "aws_route53_zone" "test" {
#   name = "dev.thomasamendez.com"
#   tags = {
#     Environment = "dev"
#   }
# }

# resource "aws_route53_record" "test-ns" {
#   zone_id = "Z03836913RO0VDLQJ03DI"
#   name    = "dev.thomasamendez.com"
#   type    = "NS"
#   ttl     = "30"
#   records = aws_route53_zone.test.name_servers
# }