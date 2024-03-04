# serializers.py
from rest_framework import serializers
from .models import * 

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class JobDesignationSerializer(serializers.ModelSerializer):
    department_id = DepartmentSerializer()

    class Meta:
        model = JobDesignation
        fields = '__all__'

class EmployeeDesignationSerializer(serializers.ModelSerializer):
    employee_number = EmployeeSerializer()
    designation_id = JobDesignationSerializer()

    class Meta:
        model = EmployeeDesignation
        fields = '__all__'
