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

    def create(self, validated_data):
        # Extract nested data for Employee
        employee_data = validated_data.pop('employee_number', {})
        employee_instance = employee_data.get('id')  # Check if 'id' is provided
        if not employee_instance:
            employee_instance = Employee.objects.create(**employee_data)

        # Extract nested data for Department
        designation_data = validated_data.pop('designation_id', {})
        department_data = designation_data.pop('department_id', {})
        department_instance = department_data.get('id')  # Check if 'id' is provided
        if not department_instance:
            department_instance, _ = Department.objects.get_or_create(**department_data)

        # Extract nested data for JobDesignation
        designation_data['department_id'] = department_instance
        designation_instance = designation_data.get('id')  # Check if 'id' is provided
        if not designation_instance:
            designation_instance = JobDesignation.objects.create(**designation_data)

        # Create EmployeeDesignation instance
        employee_designation = EmployeeDesignation.objects.create(
            employee_number=employee_instance,
            designation_id=designation_instance,
            **validated_data
        )

        return employee_designation
    
    def update(self, instance, validated_data):
        # Update nested Employee instance
        employee_data = validated_data.pop('employee_number', {})
        employee_instance = instance.employee_number
        for key, value in employee_data.items():
            setattr(employee_instance, key, value)
        employee_instance.save()

        # Update nested JobDesignation instance
        designation_data = validated_data.pop('designation_id', {})
        designation_instance = instance.designation_id
        department_data = designation_data.pop('department_id', {})
        department_instance, _ = Department.objects.get_or_create(**department_data)
        designation_instance.department_id = department_instance
        for key, value in designation_data.items():
            setattr(designation_instance, key, value)
        designation_instance.save()

        # Update other fields in EmployeeDesignation
        for key, value in validated_data.items():
            setattr(instance, key, value)
        instance.save()

        return instance