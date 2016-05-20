package controllers

import javax.inject._

import play.api.data.Forms._
import play.api.data._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class ConverterController @Inject() extends Controller {

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
    Ok(views.html.converter("This is Converter Page."))
  }

  val form = Form( "name" -> text )

  def replaceLn(string:String):String={
    return string.replaceAll("(\r\n|\r|\n)","<br>");
  }

  def compile = Action { implicit request =>
    val data = form.bindFromRequest.get
    val dataSplit = replaceLn(data);
    Ok(views.html.converter(dataSplit))
  }
}