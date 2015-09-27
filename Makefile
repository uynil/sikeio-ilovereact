.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --host 0.0.0.0 --files='index.html,demo.html,bundle/app.css'


.PHONY: clean
clean:
	rm -r bundle
