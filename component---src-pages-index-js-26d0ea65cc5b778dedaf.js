(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(151),s=n(155),l=n(156),u=n(153),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(l.a,{title:"All posts",keywords:["blog","javascript","react"]}),n.map(function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},i.a.createElement(c.a,{style:{boxShadow:"none"},to:e.fields.slug},n)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(i.a.Component);e.default=d;var p="2785444898"},151:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(32),s=n.n(c);n.d(e,"a",function(){return s.a});n(152);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},153:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return l});var a=n(158),r=n.n(a),o=n(159),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,l=c.scale},154:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(54),s=n(2),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},155:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(151),s=n(153),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.title,n=t.children,a=i.a.createElement("h3",{style:Object.assign({},Object(s.b)(1),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},e));return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,a),i.a.createElement("main",null,n),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://github.com/chenyueban",target:"_blank"},"Github")))},e}(i.a.Component);e.a=l},156:function(t,e,n){"use strict";var a=n(157),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(160),l=n.n(s),u=n(151);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(u.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"月半小夜曲",description:"A blog by chenyueban.",author:"chenyueban"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-26d0ea65cc5b778dedaf.js.map