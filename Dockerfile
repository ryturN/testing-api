# Gunakan image resmi Node.js sebagai base image
FROM node:14-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin file app.js ke dalam image
COPY app.js .

# Install dependensi
COPY package.json package-lock.json ./
RUN npm install

# Eksekusi perintah untuk menjalankan aplikasi
CMD ["node", "app.js"]
