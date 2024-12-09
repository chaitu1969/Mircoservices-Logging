# Advance Logging in Microservices

- "Observablity" -> The ability to understand the internal state of a system by examining its output
- winston, Pino, Morgan (expressJS), log4js

# Winston

- Logging levels
  - Fatal - stops the process
  - Error - error occured but still process runns
  - Warning - potential issues
  - Info - infotmation about application
  - Debug - flow of the application
  - Trace - logs repenst the path and the state of system

# Log Format

- Unstructured
- Structured - JSON (Most recomonded), XML, CSV, LogFmt
- Semi-Structured -

# Best Practices

- Use levels Effectively
- Use structured JSON
- Use record ISO-8601 Timestamp
- Standardise the context (message,eventid,source,service,file,line)
- Use correlation id and path
- Be selective privacy and compaliance (PII, GDPR)

# Format

- timestamp - ISO-8401
- level
- serviceName and info
- message
- eventId
- correlationId (nodeversion and commit hash)
- buildInfo
- Souce Information (file,line,function)
- stackTrace

# ELK Stack

- Set of tools to centralize and manage logs
- Elastic search (A platform to manage Logs) | Logstash (collect logs and stream to Elastic) | Kibana (Monitor)
- Scalablity, Real-Time (Analysis - Kibana), Integration, Security, Cost, Community
- Container | Cloud | binaries
-
