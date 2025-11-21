FROM node:18-alpine AS builder

WORKDIR /app
COPY . /app

WORKDIR /app/app-angular 
RUN npm install
RUN npx ng build 

FROM nginx:alpine

COPY --from=builder /app/app-angular/dist/app-angular/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]