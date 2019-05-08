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

    <!-- Seleção do Período -->
    <el-row style="margin-top: 20px;">
      <el-col :span="5">
        <div class="el-form-label">Selecione um período</div>
        <el-date-picker
          v-model="value_date"
          type="daterange"
          range-separator="até"
          start-placeholder="Data inicial"
          end-placeholder="Data final"
        ></el-date-picker>
      </el-col>
    </el-row>

    <!-- Seleção das Unidades -->
    <el-row style="margin-top: 20px;">
      <el-col :span="24">
        <div class="el-form-label">Selecione as unidade(s)</div>
      </el-col>
      <el-col :span="24">
        <el-row>
          <el-checkbox
            v-model="unity.status"
            v-for="(unity, index) in unities"
            v-bind:key="index"
          >{{unity.title}}</el-checkbox>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-button
            v-if="unity_select_status"
            size="small"
            icon="el-icon-success"
            type="primary"
            @click="selectAllUnits"
          >Selecionar todas unidades</el-button>
          <el-button
            v-else
            size="small"
            icon="el-icon-remove"
            type="primary"
            @click="unselectAllUnits"
          >Remover seleção das unidades</el-button>
        </el-row>
      </el-col>
    </el-row>

    <!-- Seleção da categoria de funcionários -->
    <el-row style="margin-top: 20px;">
      <el-col :span="24">
        <div class="el-form-label">Selecione a(s) categoria(s) dos funcionários</div>
      </el-col>
      <el-col :span="24">
        <el-row>
          <el-checkbox
            v-model="category.status"
            v-for="(category, index) in catergories_employee"
            v-bind:key="index"
          >{{category.title}}</el-checkbox>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-button
            v-if="category_employee_select_status"
            size="small"
            icon="el-icon-success"
            type="primary"
            @click="selectAllCategory"
          >Selecionar todas categorias</el-button>
          <el-button
            v-else
            size="small"
            icon="el-icon-remove"
            type="primary"
            @click="unselectAllCategory"
          >Remover seleção das categorias</el-button>
        </el-row>
      </el-col>
    </el-row>

    <!-- Área de filtragem -->
  </div>
</template>

<script>
export default {
  name: "reports",
  components: {},
  data() {
    return {
      value_date: "",
      unities: [
        { title: "Arapiraca", status: true },
        { title: "Penedo", status: false },
        { title: "Palmeira dos Indios", status: false },
        { title: "Viçosa", status: false }
      ],

      catergories_employee: [
        { title: "Docentes", status: true },
        { title: "Docentes Subistitutos", status: true },
        { title: "Técnicos", status: true },
        { title: "Técnicos Concomitantes", status: true }
      ],
      unity_select_status: true,
      category_employee_select_status: false
    };
  },

  methods: {
    selectAllUnits() {
      this.unities.forEach(unity => {
        unity.status = true;
      });

      this.unity_select_status = false;
    },

    unselectAllUnits() {
      this.unities.forEach(unity => {
        unity.status = false;
      });
      this.unities[0].status = true;
      this.unity_select_status = true;
    },

    selectAllCategory() {
      this.catergories_employee.forEach(category => {
        category.status = true;
      });

      this.category_employee_select_status = false;
    },

    unselectAllCategory() {
      this.catergories_employee.forEach(category => {
        category.status = false;
      });
      this.catergories_employee[0].status = true;
      this.category_employee_select_status = true;
    }
  }
};
</script>
