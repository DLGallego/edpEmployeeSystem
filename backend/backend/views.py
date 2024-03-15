from backend import serialize
from backend.models import *
from backend.serialize import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
import json

#Employee
class EmployeeTable(APIView):
    def get(self, request):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializeobj = EmployeeSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            
            # Return the employee number in the response
            employee_number = serializeobj.data.get('employee_num')
            return Response({'employee_number': employee_number}, status=201)  # 201 Created
        return Response(serializeobj.errors, status=400)  # 400 Bad Request
    
class EmployeeUpdate(APIView):
    def get(self,request,employee_num):
        try:
            employee = Employee.objects.get(employee_num=employee_num)
            serializer = EmployeeSerializer(employee)
            return Response(serializer.data)
        except:
            return Response("Employee not found in Database")

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
    def get(self,request,id):
        try:
            deptObj = Department.objects.get(id=id)
            serializer = DepartmentSerializer(deptObj)
            return Response(serializer.data)
        except:
            return Response("Department not found in Database")

    def post(self,request,department_name):
        try:
            deptObj = Department.objects.get(id=id)
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
        dlSerializedObj = JobDesignationSerializer(jobObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = JobDesignationSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class JobUpdate(APIView):
    def get(self,request,id):
        try:
            jobObj = JobDesignation.objects.get(id=id)
            serializer = JobDesignationSerializer(jobObj)
            return Response(serializer.data)
        except:
            return Response("Job not found in Database")

    def post(self,request,id):
        try:
            jobObj = JobDesignation.objects.get(id=id)
        except:
            return Response("Job not found in Database")

        serializeobj = JobDesignationSerializer(jobObj,data=request.data)
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
class EmployeeDesignationTable(APIView):
    def get(self,request):
        edObjs = EmployeeDesignation.objects.all()
        dlSerializedObj = EmployeeDesignationSerializer(edObjs,many=True)
        return Response(dlSerializedObj.data)
    
    def post(self,request):
        serializeobj = EmployeeDesignationSerializer(data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EmployeeDesignationUpdate(APIView):
    def post(self,request,pk):
        try:
            edObj = EmployeeDesignation.objects.get(pk=pk)
        except:
            return Response("Designation not found in Database")

        serializeobj = EmployeeDesignationSerializer(edObj,data=request.data)
        if serializeobj.is_valid():
            serializeobj.save()
            return Response(200)
        return Response(serializeobj.errors)
    
class EmployeeDesignationDelete(APIView):
    def post(self,request,pk):
        try:
            edObj = EmployeeDesignation.objects.get(pk=pk)
        except:
            return Response("Job not found in Database")
        edObj.delete()
        return Response(200)