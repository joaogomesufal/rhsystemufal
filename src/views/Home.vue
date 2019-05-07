<template>
  <div class="home">
    <el-row id="el-brand">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'home'}">Início</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>Página Inicial
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
