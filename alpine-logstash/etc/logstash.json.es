input {
  stdin { }
  http {
    port => 8080
  }
  tcp {
    port => 514
    type => syslog
  }
  udp {
    port => 514
    type => syslog
  }
}

output {
  stdout { codec => rubydebug }
  elasticsearch { host => elasticsearch }
}
