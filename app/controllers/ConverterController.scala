package controllers

import java.io.{FileNotFoundException, IOException}
import javax.inject._

import play.api.data.Forms._
import play.api.data._
import play.api.mvc._
import net.unicoen.mapper.Java8Mapper
import net.unicoen.generator.JavaToSwiftTreeConverter
import net.unicoen.generator.SwiftCodeGenerator


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
    Ok(views.html.converter(""))

  }

  val form = Form( "name" -> text )

  def replaceLn(string:String):String={
    val format = string.replaceAll("(\r\n|\r|\n)"," ");
    val mapper = new Java8Mapper(true)
    try{
      val tree = mapper.parse(format)
      val modified = JavaToSwiftTreeConverter.convert(tree)
      val result = SwiftCodeGenerator.generate(modified)
      return result
    }catch {
      case ex: NullPointerException => "NULL_POINTER"

    }
  }

  def compile = Action { implicit request =>
    val data = form.bindFromRequest.get
    val dataSplit = replaceLn(data)
    Ok(views.html.converter(dataSplit))
  }

}