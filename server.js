import express from "express";
const app = exress();
const {PORT=3000}=process.env;
const IS_TEST = !!module.parent;

app.get("/",(req,res)=>{
	res.status(200).send("Hello CI/CD!");
});

if(!IS_TEST){
	app.listen(PORT,()=>{
		console.log("Server is running on PORT:",PORT);
	});
}
export default app;

