<script>
import moment from "moment";

export default {
  methods: {
    validateEmail(email) {
      if (/.+@.+\..+/.test(email)) {
        return true;
      } else {
        return false;
      }
    },
    formatDate(date) {
      if (date === null) {
        return null;
      } else {
        return moment(date).format("DD/MM/YYYY");
      }
    },
    diffBetweenDates(pastDate) {
      const currentDate = moment();

      const now = currentDate.format("DD/MM/YYYY");
      const past = this.formatDate(pastDate);

      var diff = moment(now,"DD/MM/YYYY").diff(moment(past,"DD/MM/YYYY"));

      var months = moment.duration(diff).asMonths().toFixed(0);

      if(months > 0){
        return months + 'm';
      }
      else {
        return '-'
      }
    },
  },
};
</script>

