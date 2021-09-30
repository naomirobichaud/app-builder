(self.webpackChunkproject_firefly=self.webpackChunkproject_firefly||[]).push([[4086],{80729:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(15007),n(64983)),r=n(99536),s=["components"],p={},l={_frontmatter:p},c=r.Z;function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.mdx)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"lesson-4-list-all-customer-profiles-on-the-ui"},"Lesson 4: List All Customer Profiles on the UI"),(0,i.mdx)("p",null,"The app UI is powered by ",(0,i.mdx)("a",{parentName:"p",href:"https://react-spectrum.adobe.com/react-spectrum/index.html"},"React Spectrum")," by default. To learn more about React Spectrum, you're recommended to go through the ",(0,i.mdx)("a",{parentName:"p",href:"../todo-app/index.md"},"React Spectrum Codelab"),".  "),(0,i.mdx)("p",null,"In the ",(0,i.mdx)("a",{parentName:"p",href:"lesson3.md"},"previous lesson"),', customer profiles are only loaded to the frontend once you click the "Invoke" button. Now we want the profiles automatically loaded on the Home page when the page is ready, without any human interaction. '),(0,i.mdx)("p",null,"We will use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"componentWillMount")," method to initiate loading profiles, and store the loaded data in ",(0,i.mdx)("inlineCode",{parentName:"p"},"profiles")," param of the component's state. We use ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Flex>")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Grid>")," from React Spectrum to layout spectrum components on the page. Each entry of the customer profiles returned by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"get-profiles")," action is displayed with first name, last name, and email of the customers. You can also apply some CSS styling in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"index.css")," file to make it look nice. "),(0,i.mdx)("p",null,"Below is the complete code of ",(0,i.mdx)("inlineCode",{parentName:"p"},"Home.js"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react'\nimport PropTypes from 'prop-types'\nimport { Flex, Grid, ProgressCircle, Heading, Text, View } from '@adobe/react-spectrum'\nimport actions from '../config.json'\nimport actionWebInvoke from '../utils'\n\nclass Home extends React.Component {\n  constructor (props) {\n    super(props)\n\n    this.state = {\n      actionResponseError: null,\n      actionInvokeInProgress: false,\n      profiles: null\n    }\n  }\n\n  async componentWillMount () {\n    this.setState({ actionInvokeInProgress: true })\n    \n    const headers = {}\n    const params = {}\n  \n    // set the authorization header and org from the ims props object\n    if (this.props.ims.token && !headers.authorization) {\n      headers.authorization = 'Bearer ' + this.props.ims.token\n    }\n    if (this.props.ims.org && !headers['x-gw-ims-org-id']) {\n      headers['x-gw-ims-org-id'] = this.props.ims.org\n    }\n    try {\n      const actionResponse = await actionWebInvoke(actions['get-profiles'], headers, params)\n      this.setState({ profiles: actionResponse.body.content, actionResponseError: null, actionInvokeInProgress: false })\n      console.log(`action response:`, actionResponse)\n    } catch (e) {\n      console.error(e)\n      this.setState({ profiles: null, actionResponseError: e.message, actionInvokeInProgress: false })\n    }\n  }\n\n  render () {\n    const profiles = this.state.profiles\n    console.log(`profiles object:`, profiles)\n    return (\n      <View>\n        <Heading level={1}>Customer Profiles</Heading>\n        <Flex UNSAFE_className='profiles'>\n          <ProgressCircle\n                UNSAFE_className='actions-invoke-progress'\n                aria-label='loading'\n                isIndeterminate\n                isHidden={ !this.state.actionInvokeInProgress }/>\n          { !!profiles &&\n            <Grid>\n              {profiles.map((profile, i) => {\n                return <Flex UNSAFE_className='profile'>Name: { profile['firstName'] } { profile['lastName'] } - Email: { profile['email'] } - Date of birth: { profile['birthDate'] }</Flex>\n              })}\n\n            </Grid>\n          }\n          { !profiles &&\n            <Text>No profiles!</Text>\n          }\n        </Flex>\n      </View>\n    )\n  }\n}\n\nHome.propTypes = {\n  ims: PropTypes.any\n}\n\nexport default Home\n")),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Note: For simplicity of the lab, we only display the first page of the result. In a real environment, where there are hundreds of profiles, results are returned in batches, so you will need to handle pagination of data accordingly.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Home")," component above requires the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ims")," object in its ",(0,i.mdx)("inlineCode",{parentName:"p"},"propTypes")," to get the IMS context for calling the backend actions (including access token and org ID). This object is passed from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"App")," component, so it has to be updated accordingly in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"App.js")," file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"<Home ims={props.ims} />\n")),(0,i.mdx)("p",null,"As your app is already running once you ran ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app run")," in the previous lesson, just refresh the webpage at ",(0,i.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080"},"https://experience.adobe.com/?devMode=true#/apps/?localDevUrl=https://localhost:9080")," to see the updated UI."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/cb523/ui-profiles.webp 320w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/797b9/ui-profiles.webp 640w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/4b075/ui-profiles.webp 1280w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/f3ff0/ui-profiles.webp 1920w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/d14e2/ui-profiles.webp 1922w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/72799/ui-profiles.png 320w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/6af66/ui-profiles.png 640w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/21b4d/ui-profiles.png 1280w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/29114/ui-profiles.png 1920w","/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/c6720/ui-profiles.png 1922w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/project-firefly/static/cdd0358a9fdfa4e7ee8595a4e7f746bc/21b4d/ui-profiles.png",alt:"ui-profiles",title:"ui-profiles",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-customer-dashboard-lesson-4-md-a7bfd97c2d457d393880.js.map