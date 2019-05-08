<template>
  <div class="reports">
    <el-row id="el-brand">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'home'}">Início</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name: 'reports'}">Relatórios</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-date-picker
          v-model="value_date"
          type="daterange"
          range-separator="até"
          start-placeholder="Data inicial"
          end-placeholder="Data final"
        ></el-date-picker>
      </el-col>
    </el-row>

     {{ value_date }}
  </div>
</template>

<script>
export default {
  name: "reports",
  components: {},
  data() {
    return {
      value_date: ''
    }
  }
};
</script>
