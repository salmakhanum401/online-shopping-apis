FROM node:16
#Setting up working directory to keep our code and execute code 
WORKDIR /app
COPY . /app
#installing the dependencies for this application to execute
RUN npm install
EXPOSE 8000
CMD npm start
