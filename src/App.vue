<template>
  <el-container id="app">
    <el-header>
      <el-row>
        <el-col :span="2" id="el-logo">
          <h1>LOGOMARCA</h1>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu class="el-menu-vertical-demo">
              <div class="el-menu-title">
                <i class="el-icon-menu"></i>
                <span>Menu de Operações</span>
              </div>
              <el-menu-item v-for="(link, index) in links" v-bind:key="index">
                <a :href="link.url">
                  <i :class="link.icon"></i>
                  <span>{{link.title}}</span>
                </a>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <el-main>
        

        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
export default {
  data() {
    return {
      links: [
        { title: "Início", url: "/", icon: "el-icon-s-home" },
        { title: "Ocorrências", url: "/occurrences", icon: "el-icon-warning" },
        { title: "Relatório", url: "/reports", icon: "el-icon-document" }
      ]
    };
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,600i");
* {
  font-family: "Open Sans", sans-serif;
  padding: 0px;
  margin: 0px;
}

#app {
  margin: 0px;

  .el-aside {
    height: calc(100vh - 70px);
    border-right: solid 1px #ebebeb;
    .el-menu {
      border-right: none;

      .el-menu-title {
        background: #57b180;
        color: #e6e6e6;
        display: block;
        padding: 14px 24px;
        font-weight: bold;
        border-bottom: 2px solid #ebebeb;

        i {
          margin-right: 6px;
        }
      }
    }
  }

  .el-header {
    border-bottom: solid 1px #ebebeb;

    #el-logo {
      h1 {
        padding: 13px 0px;
        color: #57b180;
      }
    }
    
    
  }

  .el-main {

    #el-brand {
      background: #ebebeb;
      padding: 10px; 
      border-radius: 4px;
    }

    height: calc(100vh - 70px);
  }
}
.el-menu {

  .el-menu-item {
    padding: 0px !important;

    a {
      text-decoration: none;
      color: #909399;
      display: block;
      padding-left: 20px;
    }
  }
}

</style>
