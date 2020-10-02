echo "==== starting build process ==="
# we are currently in project root directory

echo "===  building my frontend react app ==="

cd my-developer-portal-app
npm install
npm run build

echo "=== copy react frontend build to express public ==="
cd ../ # return to the root of the application

echo "=== create a public folder in backend, if not exist yet ==="
mkdir -p ./server/public 

echo "=== copy build from fronted to backend public folder  ==="
cp -r ./my-developer-portal-app/build/* ./server/public/

echo "=== server build start  ==="
cd server 
npm install

echo "=== return script to root directory ==="
cd ../

echo "=== build process completed"