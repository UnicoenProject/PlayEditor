package controllers

import javax.inject._

import com.fasterxml.jackson.databind.ObjectMapper
import net.arnx.jsonic.JSON

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._

import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import scala.collection._
import models._
//import net.unicoen._
//import net.unicoen.node._
import net.unicoen.mapper.CPP14Mapper

import scala.collection.mutable.ArrayBuffer
/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class VisualizerController @Inject() extends Controller {

  //@TODO
  // ### 9999番ポートでデバックする
  // $ activator -jvm-debug 9999 run

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */

  //index.scala.htmlがview
  def index = Action {
    Ok(views.html.visualizer("This is Visualizer Page.",""))
  }

  val form = Form( "name" -> text )

  def replaceLn(string:String)=string

  def rawDataToUniTree(string:String)={
    new CPP14Mapper(true).parse(string)
  }
  /*
  def createData = {
    val arr = new java.util.ArrayList[UniMethodDec]
    arr += new UniMethodDec("main", Nil, "int", Nil,
      new UniBlock(ArrayBuffer(
        new UniVariableDec(Nil,"int","aaaa",new UniIntLiteral(1)),
        new UniVariableDec(Nil,"int","b",new UniIntLiteral(2)),
        new UniVariableDec(Nil,"int","c",new UniIntLiteral(300000)),
        new UniVariableDec(Nil,"int","d",new UniIntLiteral(4))),
         ""))
    arr += new UniMethodDec("add", Nil, "int", ArrayBuffer(new UniArg("int","x"),new UniArg("int","y")) , new UniBlock)
  }
 */
  def compile = Action { implicit request =>
    val text = form.bindFromRequest.get
    val rawData = text//.replaceAll("(\r\n|\r|\n)"," ");
    val treeData = rawDataToUniTree(rawData)
    val jsondata = net.arnx.jsonic.JSON.encode(treeData)
    Ok(views.html.visualizer(text,jsondata))
  }
}