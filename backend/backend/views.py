from backend import serialize
from backend.models import Employee, Department, JobDesignation, EmployeeDesignation
from backend.serialize import EmployeeSerializer, DepartmentSerializer, JobSerializer, EdSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

#Employee
class EmployeeTable(APIView):
    def get(self,request):
        empObjs = Employee.objects.all()
        dlSerializedObj = EmployeeSerializer(empObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = EmployeeSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EmployeeUpdate(APIView):
    def post(self,request,employee_num):
        try:
            empObj = Employee.objects.get(employee_num=employee_num)
        except:
            return Response("Employee not found in Database")

        serializeobj = EmployeeSerializer(empObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EmployeeDelete(APIView):
    def post(self,request,employee_num):
        try:
            empObj = Employee.objects.get(employee_num=employee_num)
        except:
            return Response("Employee not found in Database")
        empObj.delete()
        return Response(200)

#Department
class DepartmentTable(APIView):
    def get(self,request):
        deptObjs = Department.objects.all()
        dlSerializedObj = DepartmentSerializer(deptObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = DepartmentSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class DepartmentUpdate(APIView):
    def post(self,request,department_name):
        try:
            deptObj = Department.objects.get(department_name=department_name)
        except:
            return Response("Department not found in Database")

        serializeobj = DepartmentSerializer(deptObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class DepartmentDelete(APIView):
    def post(self,request,department_name):
        try:
            deptObj = Department.objects.get(department_name=department_name)
        except:
            return Response("Department not found in Database")
        deptObj.delete()
        return Response(200)
    
#JobDesignation
class JobTable(APIView):
    def get(self,request):
        jobObjs = JobDesignation.objects.all()
        dlSerializedObj = JobSerializer(jobObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = JobSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class JobUpdate(APIView):
    def post(self,request,job_name):
        try:
            jobObj = JobDesignation.objects.get(job_name=job_name)
        except:
            return Response("Job not found in Database")

        serializeobj = JobSerializer(jobObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class JobDelete(APIView):
    def post(self,request,job_name):
        try:
            jobObj = JobDesignation.objects.get(job_name=job_name)
        except:
            return Response("Job not found in Database")
        jobObj.delete()
        return Response(200)
    
#EmployeeDesignation
class EdTable(APIView):
    def get(self,request):
        EdObjs = EmployeeDesignation.objects.all()
        dlSerializedObj = JobSerializer(EdObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = EdSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EdUpdate(APIView):
    def post(self,request,pk):
        try:
            edObj = EmployeeDesignation.objects.get(pk=pk)
        except:
            return Response("Designation not found in Database")

        serializeobj = EdSerializer(edObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EdDelete(APIView):
    def post(self,request,pk):
        try:
            edObj = EmployeeDesignation.objects.get(pk=pk)
        except:
            return Response("Job not found in Database")
        edObj.delete()
        return Response(200)