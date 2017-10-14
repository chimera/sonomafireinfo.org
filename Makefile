RELEASE=$(shell git rev)-$(shell date  +"%Y-%m-%d-%H-%M-%S")

release:
	# RAILS_ENV=production rake db:migrate
	docker build --build-arg ENVKEY=$$SONOMAFIRE_ENVKEY -t sonomafireinfo:$(RELEASE) .
	docker tag sonomafireinfo:$(RELEASE) gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	gcloud docker -- push gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	docker tag sonomafireinfo:$(RELEASE) gcr.io/opszero-173723/sonomafireinfo:latest
	gcloud docker -- push gcr.io/opszero-173723/sonomafireinfo:latest

	#KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/sonomafireinfo sonomafireinfo=gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google2/kubeconfig kubectl set image deployment/sonomafireinfo sonomafireinfo=gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)
	# KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/sonomafireinfo worker=gcr.io/opszero-173723/sonomafireinfo:$(RELEASE)

run-docker:
	docker build -t sonomafireinfo .
	docker run -it -p 8081:80 sonomafireinfo
