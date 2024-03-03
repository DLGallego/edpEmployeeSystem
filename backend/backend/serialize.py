from rest_framework import serializers
from backend.models import Employee, Department, JobDesignation, EmployeeDesignation

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobDesignation
        fields = "__all__"

class EdSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeDesignation
        fields = "__all__"