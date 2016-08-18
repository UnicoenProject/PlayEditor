package controllers

import java.util
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
import java.nio.charset.Charset;

//import net.unicoen._
//import net.unicoen.node._
import scala.collection.mutable.ArrayBuffer
import net.unicoen.mapper.CPP14Mapper
import net.unicoen.interpreter._
import net.unicoen.node._
import java.io.ByteArrayOutputStream
import java.io.PrintStream


/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class VisualizerController @Inject() extends Controller {

  //@TODO
  // ### 9999番ポートでデバックする
  // $ activator -jvm-debug 9999 ~run

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */

  //index.scala.htmlがview
  def index = Action {
    Ok(views.html.visualizer("This is Visualizer Page.","","",""))
  }

  def ex1 = Action {
    Ok(views.html.visualizer("experimant 1","ex1","",""))
  }
  def ex2 = Action {
    Ok(views.html.visualizer("experimant 2","ex2","",""))
  }
  def ex3 = Action {
    Ok(views.html.visualizer("experimant 3","ex3","",""))
  }
  def ex4 = Action {
    Ok(views.html.visualizer("experimant 4","ex4","",""))
  }

  def compile = Action { implicit request =>
    textOnEditor = form.bindFromRequest.get
    val treeData = rawDataToUniTree(textOnEditor)
    val jsonData = net.arnx.jsonic.JSON.encode(treeData)
    Ok(views.html.visualizer(jsonData,"compile","",textOnEditor))
  }



  def flatten(list:util.List[Object]):util.ArrayList[UniNode]={
    val nodes = new util.ArrayList[UniNode]
    for(element <- list){
      if(element.isInstanceOf[UniNode]){
        nodes.add(element.asInstanceOf[UniNode])
      }
      else{
        val l = flatten(element.asInstanceOf[util.List[Object]])
        for(node <- l){
          nodes.add(node)
        }
      }
    }
    return nodes
  }

  def startStepExec = Action { implicit request =>
    reset()
    textOnEditor = form.bindFromRequest.get
    val node = rawDataToUniTree(textOnEditor)
    var nodes = new util.ArrayList[UniNode]
    if(node.isInstanceOf[util.ArrayList[UniNode]]){
      nodes = flatten(node.asInstanceOf[util.List[Object]])
    }
    else{
      nodes += node.asInstanceOf[UniNode]
    }
    val state = engine.startStepExecution(nodes)
    val jsonData = getJson(state)
    val encOutput = getOutput()
    Ok(views.html.visualizer(jsonData,"debug",encOutput,textOnEditor))

  }

  def execAll = Action { implicit request =>
    var state : ExecState = null
    do{
      count += 1;
      state = engine.stepExecute()
      val jsonData = getJson(state)
      val encOutput = getOutput()
    }while (engine.isStepExecutionRunning())
    val jsonData = stateHistory.get(count-1)
    val output = outputsHistory.get(count-1)
    Ok(views.html.visualizer(jsonData,"EOF",output,textOnEditor))
  }

  def execOneStep = Action { implicit request =>
    count += 1
    if(count < stateHistory.length){
      val jsonData = stateHistory.get(count)
      val output = outputsHistory.get(count)
      Ok(views.html.visualizer(jsonData,"nextStep",output,textOnEditor))
    }
    else if(engine.isStepExecutionRunning()) {
      val state = engine.stepExecute()
      val jsonData = getJson(state)
      val encOutput = getOutput()
      Ok(views.html.visualizer(jsonData,"nextStep",encOutput,textOnEditor))
    }
    else{
      Ok(views.html.visualizer(stateHistory.last, "EOF","",textOnEditor))
    }
  }

  def execBackStep = Action { implicit request =>
    if(1<count){
      count -= 1
    }
    val jsonData = stateHistory.get(count)
    val output = outputsHistory.get(count)
    Ok(views.html.visualizer(jsonData,"nextStep",output,textOnEditor))
  }

  def stopDebug = Action { implicit request =>
    engine = null
    Ok(views.html.visualizer(stateHistory.last, "STOP","",textOnEditor))
  }



  var count = 0
  var engine : Engine = new CppEngine()
  var baos : ByteArrayOutputStream = new ByteArrayOutputStream()
  val stateHistory = new util.ArrayList[String]
  val outputsHistory = new util.ArrayList[String]
  var textOnEditor = ""
  val form = Form( "name" -> text )

  def rawDataToUniTree(string:String)={
    new CPP14Mapper(true).parse(string)
  }

  def reset()={
    count = 1
    outputsHistory.clear()
    stateHistory.clear()
    engine = new CppEngine()
    baos  = new ByteArrayOutputStream()
    engine.out = new PrintStream(baos);
  }

  def getOutput()={
    val output = baos.toString()
    val encOutput = new String(output.getBytes("UTF-8"), "UTF-8")
    outputsHistory.add(encOutput)
    encOutput
  }

  def getJson(state:ExecState)={
    val jsonData = net.arnx.jsonic.JSON.encode(state)
    stateHistory.add(jsonData)
    jsonData
  }

}