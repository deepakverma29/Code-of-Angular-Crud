using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WEBAPI_Anuglar_CRUD.Models;

namespace WEBAPI_Anuglar_CRUD.Controllers
{
    public class DepartmentsController : ApiController
    {
        UserContext context = new UserContext();
        // GET api/<controller>
        public HttpResponseMessage Get()
        {
            var departs = context.Departments.ToList();
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(departs));
            return response;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}