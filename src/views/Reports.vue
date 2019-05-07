<template>
  <div class="reports">
    <el-row id="el-brand">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'home'}">Início</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name: 'reports'}">Relatórios</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>Relatórios
  </div>
</template>

<script>
export default {
  name: "reports",
  components: {}
};
</script>
