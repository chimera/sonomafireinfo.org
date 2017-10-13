RELEASE=$(shell git rev)-$(shell date  +"%Y-%m-%d-%H-%M-%S")

release:
	# RAILS_ENV=production rake db:migrate
	docker build --build-arg ENVKEY=$$SONOMAFIRE_ENVKEY -t fireresponse:$(RELEASE) .
	docker tag fireresponse:$(RELEASE) gcr.io/opszero-173723/fireresponse:$(RELEASE)
	gcloud docker -- push gcr.io/opszero-173723/fireresponse:$(RELEASE)
	docker tag fireresponse:$(RELEASE) gcr.io/opszero-173723/fireresponse:latest
	gcloud docker -- push gcr.io/opszero-173723/fireresponse:latest

	#KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/fireresponse fireresponse=gcr.io/opszero-173723/fireresponse:$(RELEASE)
	KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google2/kubeconfig kubectl set image deployment/fireresponse fireresponse=gcr.io/opszero-173723/fireresponse:$(RELEASE)
	# KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/fireresponse worker=gcr.io/opszero-173723/fireresponse:$(RELEASE)

release-beta: 
	docker build --build-arg ENVKEY=$$SONOMAFIRE_ENVKEY -t fireresponse:$(RELEASE) .
	docker tag fireresponse:$(RELEASE) gcr.io/opszero-173723/fireresponse:$(RELEASE)
	gcloud docker -- push gcr.io/opszero-173723/fireresponse:$(RELEASE)
	docker tag fireresponse:$(RELEASE) gcr.io/opszero-173723/fireresponse:latest
	gcloud docker -- push gcr.io/opszero-173723/fireresponse:latest

	KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/fireresponse-beta fireresponse=gcr.io/opszero-173723/fireresponse:$(RELEASE)
	# KUBECONFIG=$$HOME/src/github.com/acksin/consulting/opszero/infra/kubernetes-google/kubeconfig kubectl set image deployment/fireresponse-beta worker=gcr.io/opszero-173723/fireresponse:$(RELEASE)
