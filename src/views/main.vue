 <template>
    <div class="main">
        welcome
    </div>
</template>


<script>
export default {
  name: "one",
  data() {
    return {
    };
  },
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.con_info{
    height: 300px
}
.prag{
    margin-top: 50px
}
</style>
