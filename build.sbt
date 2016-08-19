name := """PlayEditor"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "net.arnx" % "jsonic" % "1.3.10",
  "com.github.UnicoenProject" % "Junicoen" % "369b98ba9b369cf64ae2eadfd9154ef378d7eb07",
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test
)

resolvers += "jitpack.io" at "https://jitpack.io"
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"