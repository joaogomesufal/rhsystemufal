<template>
  <div class="occurrences">
    <el-row id="el-brand">
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{name: 'home'}">Início</el-breadcrumb-item>
          <el-breadcrumb-item :to="{name: 'occurrences'}">Ocorrências</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
   Ocorrencias
  </div>
</template>

<script>
export default {
  name: 'occurrences',
  components: {
  }
}
</script>
