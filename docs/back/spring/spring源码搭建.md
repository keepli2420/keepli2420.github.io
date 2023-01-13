# spring源码搭建

## 源码下载

spring[源码地址v5.2.7.RELEASE](https://github.com/spring-projects/spring-framework/tree/v5.2.7.RELEASE)



查看源码对应的gradle版本

![1659404071561](assets/spting源码搭建/1659404071561.png)



## 源码构建工具gradle

下载对应的版本gradle  [下载地址](https://services.gradle.org/distributions/)

配置gradle环境变量

![1659404166499](assets/spting源码搭建/1659404166499.png)

![1659404179987](assets/spting源码搭建/1659404179987.png)

`gradle -v`查看是否配置成功



## 构建源码

解压spring源码 spring-framework-5.2.7.RELEASE.zip  --> spring-code



#### 添加gradle目录

打开spring-code\gradle\wrapper\gradle-wrapper.properties文件

![1659428192782](assets/spting源码搭建/1659428192782.png)



打开spring-code项目，idea会自动导包。**要全部取消**



#### 配置gradle

---

##### 资源仓库目录

![1659428496372](assets/spting源码搭建/1659428496372.png)

##### 配置build.gradle文件

打开build.gradle文件（这个就相当于是maven的pom文件），在文件头部加上Spring插件库

```yml
buildscript {
repositories {
maven { url "https://repo.spring.io/plugins-release" }
}
}

```

![image-20220409102450504](assets/spting源码搭建/f19267ff801dba2c2a1c72842a0769d8.png)



然后往下继续寻找，找到如下代码段,添加对应代码，配置阿里云镜像加速依赖下载，新增Spring插件库

```yml
//新增以下2个阿里云镜像
maven { url 'https://maven.aliyun.com/nexus/content/groups/public/' }
maven { url 'https://maven.aliyun.com/nexus/content/repositories/jcenter' }

//新增spring插件库
maven { url "https://repo.springsource.org/plugins-release" }
```

![1659428707347](assets/spting源码搭建/1659428707347.png)

> 都修改好之后，保存一下，点击页面下图刷新图标，等待项目下载依赖构建即可，如果有报错多刷新几遍



## 新建测试模块测试是否构建成功

> 编写一个简单的applicationContext获取容器用的bean，主要是测试Spring源码构建编译过程是否成功！

```java
package xl.test;

/**
 * @author Xl
 * @date 2022/4/9 - 0:54
 * @Description:
 */
public class User {
	private String id;
	private String userName;

	public User() {
	}

	public User(String id, String userName) {
		this.id = id;
		this.userName = userName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "User{" +
				"id='" + id + '\'' +
				", userName='" + userName + '\'' +
				'}';
	}
}

```

```java
package xl.test;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * @author Xl
 * @date 2022/4/9 - 0:55
 * @Description:
 */
@Configuration
@ComponentScan
public class JavaConfig {
	@Bean
	public User user(){
		return new User("001","Jack");
	}
}

```

```java
package xl.test;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * @author Xl
 * @date 2022/4/9 - 0:59
 * @Description:
 */
public class Test {
	public static void main(String[] args) {
		System.out.println("hello");
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(JavaConfig.class);
		User user = (User) context.getBean("user");
		System.out.println(user.toString());
	}

}

```







****

## gradle编译项目时，提示Could not find xxx.jar解决

>  将maven仓库中对应的包删除





### error1

![1659428788291](assets/spting源码搭建/1659428788291.png)

> 打开build.gradle。找到id 'io.spring.gradle-enterprise-conventions' version '0.0.2'  注释掉



### error2

![1659429539126](assets/spting源码搭建/1659429539126.png)

> 修改settings.gradle 文件中的rootProject.name = "spring"  为spring-code



### error3

![1659429893678](assets/spting源码搭建/1659429893678.png)

> 可以看出该错误是spring-core下的错误；查看CoroutinesUtils所在包目录是kotlin-coroutines

![1659429951926](assets/spting源码搭建/1659429951926.png)

导入对应的jar到spring-core-main模块下

![1659430239311](assets/spting源码搭建/1659430239311.png)

![1659430074997](assets/spting源码搭建/1659430074997.png)



### error4

![1659430268528](assets/spting源码搭建/1659430268528.png)

> spring-context模块下的错误；点击import org.springframework.instrument.InstrumentationSavingAgent;查看所在包路径；spring-instrument；添加该模块下build\libs包下的jar到spring-context-main下

### error5

![1659420183631](assets/spting源码搭建/1659420183631.png)

![1659420218311](assets/spting源码搭建/1659420218311.png)

![1659425745827](assets/spting源码搭建/1659425745827.png)