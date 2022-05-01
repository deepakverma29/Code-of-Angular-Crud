using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WEBAPI_CRUD.Models
{
    public class DBOperation:DbContext
    {
        public DBOperation():base("cs_angular_crud")
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Department> Departments { get; set; }


    }
}