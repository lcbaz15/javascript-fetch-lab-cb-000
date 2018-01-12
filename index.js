const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

//Issue and Repo objects and templates

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes){
  this.url = attributes.url;
}

Issue.prototype.template = function(){
  var template = `<li>Title: <a href="${this.url}".${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template;
};
