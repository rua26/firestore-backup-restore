"use strict";var __importStar=(this&&this.__importStar)||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(mod!=null)for(var k in mod)if(Object.hasOwnProperty.call(mod,k))result[k]=mod[k];result["default"]=mod;return result;};Object.defineProperty(exports,"__esModule",{value:true});var admin=__importStar(require("firebase-admin"));exports.admin=admin;var restoreService=__importStar(require("./import"));var backupService=__importStar(require("./export"));exports.initializeApp=function(serviceAccount,databaseURL,name){if(name===void 0){name='[DEFAULT]';}
if(admin.apps.length===0||(admin.apps.length>0&&admin.app().name!==name)){admin.initializeApp({credential:admin.credential.cert(serviceAccount),databaseURL:databaseURL,},name);admin.firestore().settings({timestampsInSnapshots:true});}
return true;};exports.backup=function(collectionName){return backupService.backup(collectionName);};exports.restore=function(fileName,options){if(options===void 0){options={};}
return restoreService.restore(fileName,options);};exports.backups=function(collectionNameArray){if(collectionNameArray===void 0){collectionNameArray=[];}
return backupService.getAllCollections(collectionNameArray);};