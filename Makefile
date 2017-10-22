RELEASE=$(shell git rev-parse HEAD)-$(shell date  +"%Y-%m-%d-%H-%M-%S")
COMMIT=$(shell git rev-parse HEAD)
CLOUD=opszero-173723

run-docker:
	docker build -t sonomafireinfo .
	docker run -it -p 8081:80 sonomafireinfo

build:
	sudo /opt/google-cloud-sdk/bin/gcloud --quiet components update
	echo $$GCLOUD_SERVICE_KEY | base64 --decode --ignore-garbage > ${HOME}/gcloud-service-key.json
	sudo /opt/google-cloud-sdk/bin/gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
	sudo /opt/google-cloud-sdk/bin/gcloud config set project $(CLOUD)

	sudo docker build -t sonomafireinfo:$(RELEASE) .
	sudo docker tag sonomafireinfo:$(RELEASE) gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	sudo /opt/google-cloud-sdk/bin/gcloud docker -- push gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	sudo docker tag sonomafireinfo:$(RELEASE) gcr.io/opszero-173723/sonomafireinfo:latest
	sudo /opt/google-cloud-sdk/bin/gcloud docker -- push gcr.io/opszero-173723/sonomafireinfo:latest

deploy-%:
	sudo curl -LO https://storage.googleapis.com/kubernetes-release/release/$(shell curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
	sudo chmod +x ./kubectl
	sudo mv ./kubectl /usr/local/bin/kubectl
	KUBECONFIG=./kubeconfig sudo -E /opt/google-cloud-sdk/bin/gcloud container clusters get-credentials staging --zone us-west1-a --project $(CLOUD)
	sudo chmod 664 ./kubeconfig
	KUBECONFIG=$(KUBECONFIG) kubectl set image deployment/sonomafireinfo $(CONTAINER)=gcr.io/$(CLOUD)/sonomafireinfo:$(COMMIT)

