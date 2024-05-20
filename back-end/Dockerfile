# Sử dụng hình ảnh chính thức của OpenJDK 11
FROM openjdk:11-jre-slim

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp JAR vào container
COPY target/Demo-0.0.1-SNAPSHOT.jar app.jar

# Mở cổng mà ứng dụng của bạn sử dụng
EXPOSE 8089

# Chạy ứng dụng
ENTRYPOINT ["java", "-jar", "app.jar"]
