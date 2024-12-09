# FROM docker.elastic.co/beats/filebeat-iss
# USER root

# COPY ./filebeat.yml /usr/share/filebeat/filebeat.yml
# RUN chown root:root /usr/share/filebeat/filebeat.yml

FROM docker.elastic.co/beats/filebeat:8.10.0  

# Replace 8.10.0 with the version you are using

USER root

# Copy your Filebeat configuration file into the container
COPY ./filebeat.yml /usr/share/filebeat/filebeat.yml

# Ensure the configuration file has the correct ownership and permissions
RUN chown root:root /usr/share/filebeat/filebeat.yml
RUN chmod go-w /usr/share/filebeat/filebeat.yml

# Set the default command
CMD ["filebeat", "-e", "-strict.perms=false", "-c", "/usr/share/filebeat/filebeat.yml"]
