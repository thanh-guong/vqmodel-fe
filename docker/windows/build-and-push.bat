CALL common.bat
docker build -t thanhguong/vqmodelfe %~dp0../../
docker push thanhguong/vqmodelfe:latest
