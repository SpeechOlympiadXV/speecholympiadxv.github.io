npm run build

touch dist/.nojekyll

git add dist

git commit -m "new deployment"

# git subtree push --prefix dist origin gh-pages

git push origin `git subtree split --prefix dist master`:gh-pages --force