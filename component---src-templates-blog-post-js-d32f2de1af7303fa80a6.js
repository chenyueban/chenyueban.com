(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(151),l=n(155),s=n(156),u=n(153),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,r=n.next;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,a&&o.a.createElement(c.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(c.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.a.Component);e.default=d;var p="3654438753"},151:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(32),l=n.n(c);n.d(e,"a",function(){return l.a});n(152);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},153:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return s});var a=n(158),r=n.n(a),i=n(159),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale},154:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},155:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(151),l=n(153),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.title,n=t.children,a=o.a.createElement("h3",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},e));return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,a),o.a.createElement("main",null,n),o.a.createElement("footer",null,o.a.createElement("a",{href:"https://github.com/chenyueban",target:"_blank"},"Github")))},e}(o.a.Component);e.a=s},156:function(t,e,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(160),s=n.n(l),u=n(151);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(u.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"月半小夜曲",description:"A blog by chenyueban.",author:"chenyueban"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d32f2de1af7303fa80a6.js.map