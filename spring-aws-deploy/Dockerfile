FROM openjdk:11
LABEL maintainer="testingDocker"
ADD target/spring-boot-aws-exe.jar java-docker-testing
ENTRYPOINT ["java","-jar","java-docker-testing"]

# Image creation command => 
			# syntax : "docker build -t imgName ." (at last space dot is also command)
			# example : "docker build -t java-docker-testing ."
			
# run image command => 
		# syntax : "docker run -p enterDockerContainerToRunOnWhichPort:enterYourSpringAppRunningPortNumber imgName"
		# example : "docker run -p 8084:8081 java-docker-testing"