using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WEBAPI_Anuglar_CRUD.Models;

namespace WEBAPI_Anuglar_CRUD.Controllers
{
    public class UsersController : ApiController
    {
        UserContext context = new UserContext();
        // GET api/<controller>
        public HttpResponseMessage Get()
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            var userslist = from users in context.Users
                        join departs in context.Departments on users.DepartmentId equals departs.Id
                        select new { users.Id,users.Name, users.Email, users.Address, users.Mobile,
                            users.DepartmentId,
                            departs.DepartmentName,
                            users.Gender
                        };

            response.Content = new StringContent(JsonConvert.SerializeObject(userslist));
            return response;
        }

        // GET api/<controller>/5
        public HttpResponseMessage Get(int id)
        {
            User user = context.Users.Find(id);
            if (user == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Not found users");
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }

        // POST api/<controller>
        public HttpResponseMessage Post(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }

        // PUT api/<controller>/5
        public HttpResponseMessage Put(int id, User user)
        {
            if (id != user.Id)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Bad Request");
            }

            context.Entry(user).State = EntityState.Modified;

            var response = Request.CreateResponse(HttpStatusCode.OK);
            try
            {
                context.SaveChanges();
                response.Content = new StringContent(JsonConvert.SerializeObject(user));
            }
            catch (DbUpdateConcurrencyException ex)
            {
                
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
                
            }

            return response;
        }

        // DELETE api/<controller>/5
        public HttpResponseMessage Delete(int id)
        {
            User user = context.Users.Find(id);
            if (user == null)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Not Found");
            }

            context.Users.Remove(user);
            context.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(user));
            return response;
        }
    }
}