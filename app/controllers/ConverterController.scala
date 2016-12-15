package controllers

import java.io.{FileNotFoundException, IOException}
import java.sql.{Connection, DriverManager}
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

  def exIndex = Action {
    Ok(views.html.converterIndex(""))
  }

  def insertToDatabase(): Unit ={
    // connect to the database named "mysql" on the localhost
    val driver = "com.mysql.jdbc.Driver"
    val url = "jdbc:mysql://localhost/mysql"
    val username = "root"
    val password = "db4editor"

    // there's probably a better way to do this
    var connection:Connection = null

    try {
      // make the connection
      Class.forName(driver)
      connection = DriverManager.getConnection(url, username, password)

      // create the statement, and run the select query
      val statement = connection.createStatement()
      val resultSet = statement.executeQuery("SELECT id, task_num, time FROM user")
      while ( resultSet.next() ) {
        val id = resultSet.getString("id")
        val task_num = resultSet.getString("task_num")
        val time = resultSet.getString("time");
        println("id"+id+", "+"task_num"+task_num+", "+"time"+time+"-----")
      }
    } catch {
      case e => e.printStackTrace
    }
    connection.close()

  }

  def replaceLn(string: String): String = try {
    val format = string.replaceAll("(\r\n|\r|\n)"," ");
    val mapper = new Java8Mapper(true)
    val tree = mapper.parse(format)
    val modified = JavaToSwiftTreeConverter.convert(tree)
    val result = SwiftCodeGenerator.generate(modified)
    return result
  } catch {
    case e: Exception => "FAILED TO TRANSLATE"

  }

  def compile = Action { implicit request =>
    val form = Form( "name" -> text )
    val data = form.bindFromRequest.get
    val dataSplit = replaceLn(data)
    Ok(views.html.converter(dataSplit))
  }

}

