(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[1429],{68342:function(e,t,i){"use strict";i.r(t),i.d(t,{_frontmatter:function(){return p},default:function(){return m}});var n=i(22122),o=i(19756),a=(i(15007),i(64983)),s=i(99536),r=["components"],p={},d={_frontmatter:p},l=s.Z;function m(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.mdx)(l,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"introduction-to-extensions"},"Introduction to Extensions"),(0,a.mdx)("p",null,"When App Builder was first introduced, we primarily supported two types of use cases -- Single Page Applications (SPAs) that can be accessed in ",(0,a.mdx)("a",{parentName:"p",href:"https://experience.adobe.com"},"Experience Cloud UI"),", and standalone Headless Applications. Over time, we began to see patterns and asks for a more integrated way to extend Adobe products through App Builder. For instance, ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/asset-microservices-configure-and-use.html?lang=en"},"AEM Asset Microservices")," allow developers to build ",(0,a.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/manage/asset-microservices-configure-and-use.html?lang=en#custom-config"},"Custom Processing Profile")," as App Builder applications that can be used in AEM to process assets in batch. However, developer has to manually set up the connection between AEM and their custom processing profiles built on App Builder. "),(0,a.mdx)("p",null,"Introducing ",(0,a.mdx)("strong",{parentName:"p"},"Extensions")," -- a new property of App Builder applications that enables developers to build and to extend specific Adobe products in an integrated fashion across our ecosystem. "),(0,a.mdx)("h2",{id:"how-does-it-work"},"How does it work?"),(0,a.mdx)("p",null,"Think of extensions as a contract between an Adobe product and an App Builder application."),(0,a.mdx)("p",null,"Let's revisit the AEM Asset Microservices example. Adobe products, like AEM Asset, can define how they'd like customers to extend the product through App Builder Applications -- what kind of operations is allowed, what kind of data format is expected, etc. This definition is called an ",(0,a.mdx)("strong",{parentName:"p"},"Extension Point"),". From the developer's perspective, developer would be able to build applications against these Extension Points that maps to the requirement of the product. Developers will also define ",(0,a.mdx)("strong",{parentName:"p"},"Endpoints")," that map to the Extension Point. "),(0,a.mdx)("p",null,(0,a.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1100px"}},"\n      ",(0,a.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.87500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,a.mdx)("picture",{parentName:"span"},"\n          ",(0,a.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/cb523/extensions.webp 320w","/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/797b9/extensions.webp 640w","/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/aa104/extensions.webp 1100w"],sizes:"(max-width: 1100px) 100vw, 1100px",type:"image/webp"}),"\n          ",(0,a.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/72799/extensions.png 320w","/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/6af66/extensions.png 640w","/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/99f37/extensions.png 1100w"],sizes:"(max-width: 1100px) 100vw, 1100px",type:"image/png"}),"\n          ",(0,a.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/ad591e7fd626a1ec650a1f289d07f053/99f37/extensions.png",alt:"extension diagram",title:"extension diagram",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,a.mdx)("p",null,"To visualize this in a diagram, you can see that each Adobe product can define as many Extension Points as needed. App Builder applications, on the right side, expose Endpoints that are implementing these defined Extension points. Each App Builder Application can implement none or multiple Extension Points across the Adobe ecosystem. "),(0,a.mdx)("p",null,"This mechanism allows developers to easily validate that the App Builder application built will work in the context of the Adobe product it is extending, and provides a flexible yet integrated way for developers to implement their custom applications. "),(0,a.mdx)("h2",{id:"available-extension-points"},"Available Extension Points"),(0,a.mdx)("p",null,"Currently, we support 2 Extension Points in App Builder. One for AEM Asset Microservices and one for Experience Cloud UI."),(0,a.mdx)("h3",{id:"experience-cloud-ui-extension-point"},"Experience Cloud UI Extension Point"),(0,a.mdx)("p",null,"This Extension Point should be used for developers who are looking to build Single Page Applications (SPAs) that can be accessed by users through ",(0,a.mdx)("a",{parentName:"p",href:"https://experience.adobe.com"},"Experience Cloud UI"),"."),(0,a.mdx)("h4",{id:"extension-point-info"},"Extension Point Info"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Title"),':  "App Builder Experience Cloud Shell Extension"'),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Name"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/excshell")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Version"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"1")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Allowed Operations"),": ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"view"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"produces ",(0,a.mdx)("inlineCode",{parentName:"li"},"text/html"))))))),(0,a.mdx)("h3",{id:"aem-asset-microservices-extension-point"},"AEM Asset Microservices Extension Point"),(0,a.mdx)("p",null,"This Extension Point should be used for developers who want to build AEM Asset Microservices Custom Processing Profiles."),(0,a.mdx)("h4",{id:"extension-point-info-1"},"Extension Point Info"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Title"),':  "Asset Compute Worker"'),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Name"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"dx/asset-compute/worker")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Version"),": ",(0,a.mdx)("inlineCode",{parentName:"li"},"1")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Allowed Operations"),": ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"workerProcess")," ",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"consumes ",(0,a.mdx)("inlineCode",{parentName:"li"},"application/json")),(0,a.mdx)("li",{parentName:"ul"},"produces ",(0,a.mdx)("inlineCode",{parentName:"li"},"application/json"))))))),(0,a.mdx)("h2",{id:"how-do-i-use-it-in-my-app-builder-project"},"How do I use it in my App Builder Project?"),(0,a.mdx)("p",null,"Similar to other properties in an App Builder project, we leverage configurations in your codebase to define Extension properties. Follow the detailed instructions below with sample code to see how you can use it in your project!"),(0,a.mdx)("h3",{id:"new-project"},"New Project"),(0,a.mdx)("p",null,"Simply follow instructions in ",(0,a.mdx)("a",{parentName:"p",href:"../../getting_started/first_app.md"},"Creating your First App Builder Application"),", you will be prompted through a few selections that set up the Extension Point info by default in your App Builder project. "),(0,a.mdx)("h3",{id:"migrating-from-existing-project-or-editing-endpoints"},"Migrating from Existing Project or Editing Endpoints"),(0,a.mdx)("p",null,"If you have an existing App Builder application prior to July 28, 2021 that you'd like to migrate, or if you'd like to edit existing endpoints, please follow ",(0,a.mdx)("a",{parentName:"p",href:"extension_migration_guide.md"},"Extension Migration Guide")," for more details. "))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-extensions-index-md-69db4d45d38d1a1a0393.js.map