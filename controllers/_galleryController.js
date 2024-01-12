async function _gallaryController(req, res) {
  
    const { listOfFiles, UploadcareSimpleAuthSchema } = await import(
      "@uploadcare/rest-client"
    );
  
    const LR = await import(
      "@uploadcare/blocks"
    );
  
    LR.registerBlocks(LR);
    
  
              
  
    const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
      publicKey: "9eaeb2ea2031be2f1d7c",
      secretKey: "a7da0d3f755a12253926",
    });
  
    const response = await listOfFiles({}, { authSchema: uploadcareSimpleAuthSchema });
  
    console.log(response);
  
    const imagesArray = []
    response.results.forEach(r => {
      imagesArray.push(r.originalFileUrl)
    });
  
    console.log(imagesArray)
  
    res.json( imagesArray );
  }
  
  module.exports = { _gallaryController };
  