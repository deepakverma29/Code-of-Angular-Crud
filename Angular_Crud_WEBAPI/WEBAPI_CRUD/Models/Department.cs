using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WEBAPI_CRUD.Models
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string DepartmentName{ get;set;}

        public ICollection<User> Users { get; set; }
    }
}