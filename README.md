# ArtFirst

art library 开发项目，主项目在art-extends.

## 编译

ng build art-extends --configuration production

## publish

cd dist/art-extends/
我们发布的package名字是@think-make/art-extends，已@开头的代表组织，npm规定这种默认私有要交钱。添加--access public变为公有。
npm publish --access public
